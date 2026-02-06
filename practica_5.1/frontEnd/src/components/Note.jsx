const Note = ({note, cambiarImportancia}) =>{
  const label = note.important
    ? 'make important' : 'make not important' 
  return(
    <li className="note">
      {note.content}
      <button onClick={cambiarImportancia}>{label}</button>
    </li>
  )
}

export default Note