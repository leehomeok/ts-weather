import commander from 'commander'
import colors from 'colors'

const command = commander.version('0.1.0')
.option('-p, --peppers', 'Add peppers')
.option('-P, --pineapple', 'Add pineapple')
.option('-V, --version', 'output the version')
.option('-C, --city [name]', 'Add the city name')
.option('-b, --bbq-sauce', 'Add bbq sauce')
.option('-b, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
.parse(process.argv)
if(!command.city){
    command.outputHelp()
}
if(process.argv.slice(2).length === 0){
  command.outputHelp(colors.red)
  process.exit()
}

console.log(command.city)