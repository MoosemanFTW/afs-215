const goodDay = require('./instances')
spacer = () => {console.log('----------------------------')}

ND1 = new goodDay()
ND1.timeOfDay(3)
ND1.timeOfDay(60)
spacer()

ND2 = new goodDay()
ND2.timeOfDay(7)
ND2.timeOfDay(49)
spacer()

ND3 = new goodDay()
ND3.timeOfDay(21)
spacer()

ND4 = new goodDay()
ND4.timeOfDay(8)
spacer()

ND5 = new goodDay()
ND5.timeOfDay('Not a number')
ND5.timeOfDay(true)
spacer()