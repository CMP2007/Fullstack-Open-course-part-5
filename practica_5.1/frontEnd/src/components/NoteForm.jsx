 const NoteForm = ({addNote, newNote, handleNoteChance}) => {
    return(
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChance}/>
        <button type='submit'>save</button>
      </form>
    )
  }

  export default NoteForm   