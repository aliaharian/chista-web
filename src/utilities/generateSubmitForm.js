const generateSubmitForm = (action, values) => {
  console.log('action', action)
  console.log('values', values)
  const newForm = document.createElement('FORM');
  newForm['name'] = 'paramsForm';
  newForm['method'] = 'POST';
  newForm['action'] = action;
  newForm.style.cssText = 'display:none;';
  document.body.appendChild(newForm);
  const objKeys = Object.keys(values);
  for (const i of objKeys) {
    const newInput = document.createElement('INPUT');
    newInput['type'] = 'TEXT';
    newInput['name'] = i;
    // newInput['value'] = values[i];
    newInput.setAttribute("value", values[i]);

    newForm.appendChild(newInput);
  }
  newForm['submit']();
}

export default generateSubmitForm
