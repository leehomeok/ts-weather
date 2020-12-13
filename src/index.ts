import commander  from 'commander'
import colors from 'colors'
import axios,{AxiosResponse} from 'axios'


interface ILive{
    province: string,
    city:string,
    adcode: string,
    weather:string,
    temprature:string,
    winddirection:string,
    windpower: string,
    humidity:string,
    reporttime:string
}
interface IWeatherRes{
    status: string,
    count: string,
    info: string,
    infocode: string,
    lives: ILive[]
}
const url = 'http://restapi.amap.com/v3/weather/weatherInfo'
const key= 'e4244a57ac1cd8ba4d43726661b07537'
const log = console.log
const command = new commander.Command();
command.version('0.1.0')
// .option('-p, --peppers', 'Add peppers')
// .option('-P, --pineapple', 'Add pineapple')
.option('-C, --city [name]', 'Add the city name')
.parse(process.argv)
// if(!command.city){
//     command.outputHelp()
// }
if(process.argv.slice(2).length === 0){
  command.outputHelp(colors.red)
  process.exit()
}


async function getWeather(city:string){
    try{
     const res = await axios.get(`${url}?city=${encodeURI(city)}&key=${key}`)
        const live = res.data.lives[0]
        const {province, weather, temperature} = live
        log(colors.green(live.reporttime))
        log(colors.white(`${province} ${live.city}`))
        log(colors.yellow(`${temperature} ${weather}`))
    }
    catch(e){
        log(colors.red('天气服务异常'))
    }
}
getWeather(command.city)