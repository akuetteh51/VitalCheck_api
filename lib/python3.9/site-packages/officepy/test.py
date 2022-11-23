class ParameterInfo:
    def __init__(self, name:str, description: str = None):
        self.name = name
        self.description = description

def fun(id: str, parameters: 'list of ParameterInfo'):
    return

if __name__ == '__main__':
    fun('hello', [ParameterInfo('a', 'a desc'), ParameterInfo('b', 'b desc')])
    