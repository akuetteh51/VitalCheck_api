from .customfunctions import customfunction, registration, Type, ParameterInfo, Dimensionality
import statistics

@customfunction("SUM", 
    parameters = [
        ParameterInfo(Type.number), 
        ParameterInfo(Type.number)
    ],
    description="Sum two numbers")
def mysum(a, b):
    return a + b

@customfunction()
def mysum2(a, b):
    return a + b

@customfunction("SUM3", 
    parameters = [
        ParameterInfo(Type.number, Dimensionality.matrix), 
        ParameterInfo(Type.number)
    ],
    description="Sum two numbers", resultDimensionality = Dimensionality.matrix)
def mysum3(a, b):
    return a + b

@customfunction("PYSTDEV", 
                    parameters=[
                        ParameterInfo(dimensionality=Dimensionality.matrix)])
def pystdev(data):
    flatList = [item for sublist in data for item in sublist]
    return statistics.stdev(flatList)

if __name__ == "__main__":
    print(registration.getMetadataJson())
    print(mysum(1, 2))
