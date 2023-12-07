
//run : node .\XSFTest.js

const inputA = [
  { name: "Alex", tel: "0991112222", code: "xsf0001" },
  { name: "Jane", tel: "0812221234", code: "xsf0002" },
  { name: "Alex", tel: "0832214433", code: "xsf0001" },
  { name: "Alex", tel: "0991113122", code: "xsf0003" },
];

const convertFormatA = (items) => {
  const result = new Array();
  const itemsMap = new Map();

  //ลูปด้วย Array ของ items ด้วย forEach เปลี่ยน input เป็น item
  items.forEach((item) => {
    //แยก key ออกมาจาก item
    const { name, tel, code } = item;

    //เช็ค key code ของ itemsMap กับ กับ item ว่าซ้ำกันไหม
    if (itemsMap.has(code)) {
      //ถ้าซ้ำให้เรียก itemsMap ที่ซ้ำกันออกมาโดยใช้ code เป็นตัวแปลชื่อ existingItem
      const existingItem = itemsMap.get(code);

      //นำ tel ของ item ที่ซ้ำ มาเพิ่มใน tel ของ existingItem โดยต้องใส่ tel ของ existingItem เดิมไปด้วย
      existingItem.tel = [existingItem.tel, tel];
    } else {
      //ถ้า code ของ itemsMap ไม่ซ้ำกับ code ของ item ให้เพิ่ม { name, tel, code } โดยใช้ code เป็น key เข้าไปใน itemsMap เพื่อนำไปลูปต่อไป
      itemsMap.set(code, { name, tel, code });
    }
  });

  //นำ itemsMap มาลูปเพื่อ push ค่าที่ได้เข้าไปใน Array
  itemsMap.forEach((value) => result.push(value));

  console.log(result);
};

convertFormatA(inputA);

const inputB = {
  customer: "Xsurface",
  contact: [{ name: "Max" }, { name: "Mike" }, { name: "Adam" }],
  address: "Sukhumvit 62",
};

const convertFormatB = (items) => {
  const result = new Array();

  const { customer, contact, address } = items;

  // นำ contact ที่เป็น Array มาลูป และเพิ่ม customer กับ address เข้าไปใน item ที่เก็บค่าของ contact array
  contact.forEach((item) => {
    item.customer = customer;
    item.address = address;
    result.push(item);
  });

  return console.log(result);
};

convertFormatB(inputB);

const inputC = [
  { name: "A", age: "30" },
  { name: "B", age: "9" },
  { name: "C", age: "20" },
  { name: "D", age: "18" },
  { name: "E", age: "11" },
  { name: "F", age: "60" },
  { name: "G", age: "27" },
  { name: "H", age: "90" },
  { name: "I", age: "21" },
  { name: "J", age: "12" },
];

const convertFormatC = (items) => {
  const result = new Array();

  items.forEach((item) => {
    const { name, age } = item;
    if (age % 3 === 0 && age <= 30) {
      result.push({ name, age });
      result.sort((a, b) => a.age - b.age);
    }
  });

  //รหัสสี ANSI
  const green = '\x1b[32m';
  const white = '\x1b[37m';
  const openBrownBg = '\x1b[48;5;52m';
  const closeBrownBg = '\x1b[0m';

  result.map((item) => console.log(`${green}This is ${item.name},${green} ${openBrownBg}${white}It correctly outputs from question C.${white}${closeBrownBg}`));

};

convertFormatC(inputC);

