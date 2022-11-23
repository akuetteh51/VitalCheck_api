import json
import enum
import pandas
from typing import List

class Type(enum.EnumMeta):
    any = 'any'
    number = 'number'
    boolean = 'boolean'
    string = 'string'

class Dimensionality(enum.EnumMeta):
    scalar = 'scalar'
    matrix = 'matrix'

class ParameterInfo:
    def __init__(self, type: Type = Type.any, dimensionality: Dimensionality = Dimensionality.scalar, name:str = None, description: str = None):
        self.name = name
        self.type = type
        self.dimensionality = dimensionality
        self.description = description


class FunctionResultInfo:
    def __init__(self):
        self.dimensionality = Dimensionality.scalar

class FunctionInfo:
    def __init__(self):
        self.id = None
        self.name = None
        self.description = None
        self.parameters = None
        self.result = None

class MetadataInfo:
    def __init__(self):
        # Add the built-in function
        codeFunc = FunctionInfo()
        codeFunc.id = 'python'
        codeFunc.name = 'PYTHON'
        codeFunc.description = 'Run Python code'

        codeParam = ParameterInfo()
        codeParam.name = 'code'
        codeParam.type = Type.string
        codeFunc.parameters = [codeParam]
        self.functions: List[FunctionInfo] = [codeFunc]


class CustomFunctionRegistration:
    instance: 'CustomFunctionRegistration' = None

    def __init__(self):
        self._metadata = MetadataInfo()
        self._functionMap = dict()
        return

    @property
    def metadata(self) -> MetadataInfo:
        return self._metadata

    def getFunction(self, id: str):
        return self._functionMap.get(id, None)

    def add(self, function, id: str, name: str, description: str, parameters: List[ParameterInfo], resultDimensionality: Dimensionality) -> FunctionInfo:
        func = FunctionInfo()
        func.id = id
        self._functionMap[id] = function

        if name is not None and len(name) > 0:
            func.name = name
        else:
            func.name = id

        if description is not None and len(description) > 0:
            func.description = description
        else:
            del func.description

        if parameters is not None and len(parameters) > 0:
            func.parameters = parameters
            for par in func.parameters:
                if par.description is None or len(par.description) == 0:
                    del par.description
                if par.dimensionality == Dimensionality.scalar:
                    del par.dimensionality
                if par.type == Type.any:
                    del par.type
        else:
            del func.parameters

        if resultDimensionality == Dimensionality.matrix:
            func.result = FunctionResultInfo()
            func.result.dimensionality = resultDimensionality
        else:
            del func.result

        # remove any existing function with same id or same name
        self._metadata.functions[:] = [item for item in self._metadata.functions if item.id != func.id and item.name != func.name] 
        self._metadata.functions.append(func)
        return func

    def getMetadataJson(self) -> str:
        metadataJson = json.dumps(self.metadata, default = lambda o: o.__dict__)
        return metadataJson

    def clear(self) -> None:
        self._metadata = MetadataInfo()

    @staticmethod
    def register(func, id: str, name: str, description: str, parameters: List[ParameterInfo], resultDimensionality: Dimensionality = Dimensionality.scalar) -> None:
        if CustomFunctionRegistration.instance is None:
            CustomFunctionRegistration.instance = CustomFunctionRegistration()
        CustomFunctionRegistration.instance.add(func, id, name, description, parameters, resultDimensionality)


def customfunction(name: str = None, description: str = None, parameters: List[ParameterInfo] = None, resultDimensionality: Dimensionality = Dimensionality.scalar):
    def register(function):
        id = function.__name__
        parameterNames = function.__code__.co_varnames
        parameterCount = function.__code__.co_argcount
        metadataParameters: List[ParameterInfo] = []
        if parameters is None:
            for i in range(parameterCount):
                par = ParameterInfo()
                par.name = parameterNames[i]
                metadataParameters.append(par)
        else:
            for i in range(parameterCount):
                par = ParameterInfo()
                par.name = parameterNames[i]
                par.type = parameters[i].type
                par.dimensionality = parameters[i].dimensionality
                par.description = parameters[i].description
                metadataParameters.append(par)
        CustomFunctionRegistration.register(function, id, name, description, metadataParameters, resultDimensionality)
        return function
    return register

class InvokeResult:
    def __init__(self):
        self.result = None
        self.error = None

def invoke(id: str, parameterArrayJsonString: str) -> str:
    ret = InvokeResult()
    if parameterArrayJsonString is None or len(parameterArrayJsonString) == 0:
        parameterArrayJsonString = "[]"
    parameterArray = json.loads(parameterArrayJsonString)
    ret.error = -1
    if CustomFunctionRegistration.instance is not None:
        func = CustomFunctionRegistration.instance.getFunction(id)
        if func is not None:
            ret.result = func(*parameterArray)
            ret.error = 0

    if isinstance(ret.result, pandas.DataFrame):
        ret.result = ret.result.values.tolist()

    return json.dumps(ret, default = lambda o: o.__dict__)

registration = CustomFunctionRegistration.instance
if registration is None:
    CustomFunctionRegistration.instance = CustomFunctionRegistration()
    registration = CustomFunctionRegistration.instance


if __name__ == "__main__":
    CustomFunctionRegistration.register(None, "sum", "SUM", None, [ParameterInfo(Type.number, name='a'), ParameterInfo(Type.number, name='b')])
    metadataJson = json.dumps(registration.metadata, default = lambda o: o.__dict__)
    print(metadataJson)
    
    @customfunction()
    def testMethod(a, b):
        return a + b

    print(invoke('testMethod', '[2,3]'))
    
    

