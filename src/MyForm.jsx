export default function MyForm({ readData }) {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault()

    // Read the form data
    const form = e.target
    const formData = new FormData(form)

    // You can pass formData as a fetch body directly:
    const formJson = Object.fromEntries(formData.entries())
    fetch('http://localhost:3000/info', {
      method: form.method,
      body: JSON.stringify(formJson),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => readData())
  }

  return (
    <div className='form-container'>
      <form className='my-form' method='post' onSubmit={handleSubmit}>
        <label>
          Text input: <input name='myInput' defaultValue='Some initial value' />
        </label>
        <hr />
        <label>
          Checkbox: <input type='checkbox' name='myCheckbox' defaultChecked={true} />
        </label>
        <hr />
        <p>
          Radio buttons:
          <label>
            <input type='radio' name='myRadio' value='option1' /> Option 1
          </label>
          <label>
            <input type='radio' name='myRadio' value='option2' defaultChecked={true} /> Option 2
          </label>
          <label>
            <input type='radio' name='myRadio' value='option3' /> Option 3
          </label>
        </p>
        <hr />
        <button type='reset'>Reset form</button>
        <button type='submit'>Submit form</button>
      </form>
    </div>
  )
}
