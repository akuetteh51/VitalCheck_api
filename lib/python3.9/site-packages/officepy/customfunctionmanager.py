from . import excel
from . import runtime
from . import customfunctions

def register():
    context = excel.RequestContext()
    context.executionMode = runtime.RequestExecutionMode.instantSync
    context._customData = "WacPartition"
    cfManager = excel.CustomFunctionManager.newObject(context)
    metadataJson = customfunctions.registration.getMetadataJson()
    cfManager.register(metadataJson, "")

def generateMetadata() -> str:
    return customfunctions.registration.getMetadataJson()

def clear() -> None:
    customfunctions.registration.clear()
