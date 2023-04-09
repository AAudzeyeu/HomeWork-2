
const data = [
  {
    type: "input",
    id: "name",
    value: "",
    placeholder: "name",
  },
  {
    type: "input",
    id: "surname",
    value: "",
    placeholder: "surname",
  },
  {
    type: "date",
    id: "birthday",
    value: "",
    placeholder: "date of birth",
  },
  {
    type: "radio",
    id: "sex",
    value: "man",
    options: ["man", "woman"],
    placeholder: "sex",
  },
  {
    type: "checkbox",
    id: "time",
    value: "",
    options: ["9-10 AM", "11-12 AM", "1-2 PM", "3-4 PM", "5-6 PM"],
    placeholder: "select timeslot for assessment",
  },
];

let createForm = function () {
  try {
    let container = document.querySelector('#container');
    let form = document.createElement('form');
    form.id = 'form';
    container.append(form);
  } catch (e) {
    console.log('container does not exist')
  }

  let completionForm = function () {


    data.forEach(function (element) {

      let br = document.createElement('br');

      if ((element['type']) === 'input') {
        let input = document.createElement('input');
        let label = document.createElement('label');

        input.type = element[`type`];
        input.id = element['id'];
        input.value = element['value'];
        input.name = element['id']

        label.textContent = element['placeholder'];
        label.setAttribute('for', `${element['id']}`);
        label.setAttribute('name', `${element['id']}`);

        form.append(input);
        form.append(label);
        form.append(br);

      } else if ((element['type']) === 'date') {

        let input = document.createElement('input');
        let label = document.createElement('label');

        input.type = element[`type`];
        input.id = element['id'];
        input.value = element['value'];
        input.name = element['id'];

        label.textContent = element['placeholder'];
        label.setAttribute('for', `${element['id']}`);
        label.setAttribute('name', `${element['id']}`);

        form.append(input);
        form.append(label);
        form.append(br);

      } else if ((element['type']) === 'radio') {

        let input = document.createElement('input');

        input.type = 'radio'
        input.value = element['value']

        element['options'].forEach(function (item, index) {

          let input = document.createElement('input');
          let label = document.createElement('label');

          input.name = element['id'];
          input.type = element['type'];

          label.id = element['options'][index];
          label.textContent = element['options'][index];
          // label.setAttribute('name', `${element['id']}`);

          form.append(input);
          form.append(label);
        })

        form.append(br);

      } else if ((element['type']) === 'checkbox') {

        let input = document.createElement('input');
        let label = document.createElement('label');

        input.type = element[`type`];
        input.id = element['id'];
        input.value = element['value'];
        input.name = element['id']

        label.textContent = element['placeholder'];
        label.setAttribute('for', `${element['id']}`);
        

        element['options'].forEach(function (item, index) {

          let input = document.createElement('input');
          let label = document.createElement('label');

          input.type = element[`type`];
          input.id = element['id'];
          input.name = element['id']
          input.value = element['value'];

          label.textContent = element['options'][index];
          label.setAttribute('name', `${element['id']}`);

          form.append(input);
          form.append(label);
        });
      }

      form.append(br)

    });
  };

  let conclusionDataToArrayForm = function (event) {

    try {
      event.preventDefault();

      let finishForm = [];


      let el = document.querySelector('#form');
      if (!el) throw new Error('form does not exist')

      let nameForm = {};
      let surnameForm = {};
      let birthForm = {};
      let sexForm = {};
      let timeForm = {};

      if (!data && !data.length) throw new Error('wrong data')

      data.forEach(function (element) {

        if ((element['id']) === 'name') {

          nameForm['id'] = element['id'];
          nameForm['value'] = el.name.value;

          finishForm.push(nameForm);

        } else if ((element['id']) === 'surname') {

          surnameForm['id'] = element['id'];
          surnameForm['value'] = el.surname.value;

          finishForm.push(surnameForm);

        } else if ((element['id']) === 'birthday') {

          birthForm['id'] = element['id'];
          birthForm['value'] = el.birthday.value;

          finishForm.push(birthForm);

        } else if ((element['id']) === 'sex') {

          sexForm['id'] = element['id'];

          let radioInp = document.getElementsByName('sex');
          let radioInpArr = Array.from(radioInp);

          radioInpArr.forEach(function (item, index) {

            if (radioInp[index].type == "radio" && radioInp[index].checked) {

              sexForm['value'] = element['options'][index]

            }
          });

          let unCheckedForm = 0;

          radioInpArr.forEach(function (item, index) {

            if (!(radioInp[index].checked)) {
              unCheckedForm++;
            }

            if (unCheckedForm === radioInp.length) {
              sexForm['value'] = '';
            }

          });

          finishForm.push(sexForm);

        } else if ((element['id']) === 'time') {

          timeForm['id'] = element['id'];

          let checkInp = document.querySelectorAll('#time');
          let checkInpArr = Array.from(checkInp);

          let timeResultForm = [];

          checkInpArr.forEach(function (item, index) {

            if (checkInp[index].type == "checkbox" && checkInp[index].checked) {

              timeResultForm.push(element['options'][index]);
              timeForm['value'] = timeResultForm;

            }
          });

          let unCheckedForm = 0;

          checkInpArr.forEach(function (item, index) {

            if (!(checkInp[index].checked)) {
              unCheckedForm++;
            }

            if (unCheckedForm === checkInp.length) {
              timeForm['value'] = '';
            }

          });

          finishForm.push(timeForm);

        }

      });

      console.log(finishForm);
    } catch (e) {
      console.log(e)
    }

  };

  let createButton = function () {
    try {
      let button = document.createElement('button');

      button.id = 'button';
      button.formMethod = 'get';
      button.textContent = 'Submit';

      form.append(button);
    } catch (e) {
      console.log('form does not exist')
    }

    
    let submitButton = () => document.querySelector('#form').addEventListener('submit', conclusionDataToArrayForm);
    submitButton();
    

  };

  completionForm();
  createButton();

};

createForm(data);


















