const nums = new Array("ONE", "Two", "Three", "Four", "Five");

/* FOREACH */

nums.forEach((num, i) => console.log(`${i} -> ${num}`));

/* FOROF */

for (const num of nums) {
    console.log(num);
}

/* FORIN */

const symbol = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    tw: "Twitter",
    wa: "Whatsapp"
};

for (const k in symbol) {
    console.log(`${k} -> ${symbol[k]}`);
}
 