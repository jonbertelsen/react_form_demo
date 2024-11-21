function DemoList({ demoData = [] }) {
  return (
    <div>
      <h2>Liste fra JsonServer API</h2>
      {JSON.stringify(demoData)}

      {demoData.map((demo) => (
        <ul key={demo.id}>
          <li>id: {demo.id}</li>
          <li>myInput: {demo.myInput}</li>
          <li>Checkbox: {demo.myCheckbox == 'on' ? 'Checked' : 'Unchecked'}</li>
          <li>Radio: {demo.myRadio}</li>
        </ul>
      ))}
    </div>
  )
}

export default DemoList
