// unit-test.js
//const functions = require('../main_page/main.js');

//Unit tests for reformatDate()
function reformatDate(date){
    // Separate and reorder the elements of the given date
    let newDate = date.split("/");
    newDate = newDate[2] + newDate[0] + newDate[1];
    return newDate;
  }

//Test normal date input
test('test with normal input 11/02/2022', () => {
    expect(reformatDate('11/02/2022')).toBe('20221102');
});

//Test for consistent response in large date input
test('test with large set of date inputs', () => {
    let input = ['10/01/2020','10/02/2020','10/03/2020','10/04/2020','10/05/2020',
                 '10/06/2020','10/07/2020','10/08/2020','10/09/2020','10/10/2020',
                 '10/11/2020','10/12/2020','10/13/2020','10/14/2020','10/15/2020',
                 '08/16/2021','08/17/2021','08/18/2021','08/19/2021','08/20/2021',
                 '08/21/2021','08/22/2021','08/23/2021','08/24/2021','08/25/2021',
                 '08/26/2021','08/27/2021','08/28/2021','08/29/2021','08/30/2021',
                 '02/01/2022','02/02/2022','02/03/2022','02/04/2022','02/05/2022',
                 '02/06/2022','02/07/2022','02/08/2022','02/09/2022','02/10/2022',
                 '02/11/2022','02/12/2022','02/13/2022','02/14/2022','02/15/2022',
                 '02/16/2022','02/17/2022','02/18/2022','02/19/2022','02/20/2022'];
    let output = [];
    for(let i = 0; i < input.length; i++){
        output.push(reformatDate(input[i]));
    }   //in each loop, one input date is reformatted and pushed into ouput array
    expect(output).toStrictEqual(['20201001','20201002','20201003','20201004','20201005',
                                  '20201006','20201007','20201008','20201009','20201010',
                                  '20201011','20201012','20201013','20201014','20201015',
                                  '20210816','20210817','20210818','20210819','20210820',
                                  '20210821','20210822','20210823','20210824','20210825',
                                  '20210826','20210827','20210828','20210829','20210830',
                                  '20220201','20220202','20220203','20220204','20220205',
                                  '20220206','20220207','20220208','20220209','20220210',
                                  '20220211','20220212','20220213','20220214','20220215',
                                  '20220216','20220217','20220218','20220219','20220220']);
});



//Test for error prevention in empty input
test('test with empty input', () => {
    expect(reformatDate('')).toBeUndefined;
    expect(reformatDate('')).toBe(`${undefined}${undefined}`);
    //an empty string cannot be splitted, resulting undefined elements in the 'newDate' array
}); 

//Test for incorrect format - all slashes missing
test('test with incorrect input without slash', () => {
    expect(reformatDate('01012022')).toBe(`${undefined}01012022${undefined}`);
    //since there is no slash, 'newData' only has one string newData[0] = '01012022'
    //other elements newData[1] and newData[2] are undefined
});

//Test for incorrect format - one slash missing
test('test with incorrect input with just one slash', () => {
    expect(reformatDate('11/152022')).toBe(`${undefined}11152022`);
    //since there is only one slash, the string is splitted into two strings in newDate array
    //as a result newDate[2] does not exist and hence undefined
});