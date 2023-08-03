const sex = document.querySelector("#gender");
const maritalstatus = document.querySelector("#status");
const region = document.querySelector("#county");

const sex2 = document.querySelector("#kin_gender");


const gender = [
    "Female",
    "Male",
    "Other",
];

gender.forEach((binary) => {
    const option = document.createElement("option");
    option.value = `${binary}`;
    option.textContent = `${binary}`;
    sex.appendChild(option);
});

const kin_gender = [
    "Female",
    "Male",
    "Other",
];

kin_gender.forEach((binary) => {
    const option = document.createElement("option");
    option.value = `${binary}`;
    option.textContent = `${binary}`;
    sex2.appendChild(option);
});

const sstatus = [
    "Single",
    "Married",
];

sstatus.forEach((binary) => {
    const option = document.createElement("option");
    option.value = `${binary}`;
    option.textContent = `${binary}`;
    maritalstatus.appendChild(option);
});


const counties = [
    "Mombasa",
    "Kwale",
    "Kilifi",
    "Tana River",
    "Lamu",
    "Taita Mak Taveta",
    "Garissa",
    "Wajir",
    "Mandera",
    "Marsabit",
    "Isiolo",
    "Meru",
    "Tharaka-Nithi",
    "Embu",
    "Kitui",
    "Machakos",
    "Makueni",
    "Nyandarua",
    "Nyeri",
    "Kirinyaga",
    "Murang’a",
    "Kiambu",
    "Turkana",
    "West Pokot",
    "Samburu",
    "Trans-Nzoia",
    "Uasin Gishu",
    "Elgeyo-Marakwet",
    "Nandi",
    "Baringo",
    "Laikipia",
    "Nakuru",
    "Narok",
    "Kajiado",
    "Kericho",
    "Bomet",
    "Kakamega",
    "Vihiga",
    "Bungoma",
    "Busia",
    "Siaya",
    "Kisumu",
    "Homa Bay",
    "Migori",
    "Kisii",
    "Nyamira",
    "Nairobi",
];

counties.forEach((county) => {
    const option = document.createElement("option");
    option.value = `${county}`;
    option.textContent = `${county}`;
    region.appendChild(option);
});


