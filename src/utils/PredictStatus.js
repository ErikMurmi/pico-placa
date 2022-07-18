const inRange=(value,min,max)=>(value>=min && value<=max)

const predictStatus=(plate,date,time)=>{
    const lastDigit = Number(plate.charAt(plate.length -1));
    const day = date.getDay();
    const numericTime = Number(time.replace(':',''));

    const days = {
        0:false,
        1:inRange(lastDigit,1,2),
        2:inRange(lastDigit,3,4),
        3:inRange(lastDigit,5,6),
        4:inRange(lastDigit,7,8),
        5:(lastDigit===9 || lastDigit===0),
        6:false
    }

    console.log('HORA: ' +numericTime);
    console.log('dia: '+day)
    console.log('PLACA '+lastDigit)
  
    if ((day===0||day===6) || !(inRange(numericTime,700,930) || 
      inRange(numericTime,1600,1930)))
    {
      return'No problem, all plates can be on road that time.'
    }
  
    if(days[day]){
      return "Sorry, your plate can't be on road that time. "
    }
    
    return 'No problem, your plate can be on road'
}

export default predictStatus;