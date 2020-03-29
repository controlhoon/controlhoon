//scope 활용 사람마다 다른 운동 그 운동에 따른 days 출력

const getRandEvent = () =>{
    const random = Math.floor(Math.random() * 3);
    if(random === 0){
        return 'Marathon';
    } 
    else if (random === 1){
        return 'Triathlon';
    }
    else if (random === 2){
        return 'Pentathlon';
    }
};

const getTrainingDays = event => {
    let days;
    if(event ==='Marathon'){
        days = 50;
    }
    else if (event === 'Triathlon'){
        days = 100;
    }
    else if (event === 'Pentathlon'){
        days = 200;
    }
    return days;
};

const logEvent = (name,event) =>{
    console.log(`${name}'s event is : ${event}. `);
};

const logDays = (name,days) =>{
    console.log(`${name}'s days is : ${days}.`);
};

const name1 = '종훈';
const name2 = '효경';

const event1 = getRandEvent();
const event2 = getRandEvent();

const days1 = getTrainingDays(event1);
const days2 = getTrainingDays(event2);

logEvent(name1,event1);
logDays(name1,days1);

logEvent(name2,event2);
logDays(name2,days2);

