export function taskFirst(){
    // using const
    const task = 'I prefer const when I can.';
    return task;
}

export function getLast(){
    return ' is okay';
}

export function taskNext(){
    // using let
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}
