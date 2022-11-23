from . import excel
from . import runtime
def testHello(name):
    return 'Hello,' + name

# Batch mode
context = excel.RequestContext()
sheet = context.workbook.worksheets.getItem("Sheet1");
range = sheet.getRange("A1:B2")
context.load(range)
context.sync()
if (range.values[1][0] > 10):
    range.getCell(1,0).format.font.color = "red"
    context.sync()

# InstantSync mode
context = excel.RequestContext()
context.executionMode = runtime.RequestExecutionMode.instantSync
sheet = context.workbook.worksheets.getItem("Sheet1")
range = sheet.getRange("A1:B2")
if (range.values[1][0] > 10):
    range.getCell(1,0).format.font.color = "red"

