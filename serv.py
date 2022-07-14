import eel

eel.init('web')

@eel.expose
def get():
    print('test')

eel.start('basic.html', size=(700, 700))