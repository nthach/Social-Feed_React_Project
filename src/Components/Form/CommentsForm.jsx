
 
function CommentsForm() {//add function and ref file name
    const handleSubmit = event => {
        event.preventDefaul ();
        alert('Your comment has been submitted')
    }


     return ( 
        <div class='div-form' style={{backgroundColor: 'rgb(217,226,238)'}}>

            <form onSubmit={handleSubmit}>
            <label>
                    <p>Name</p>
                    <input name="name" />
            </label>

            <label>
                    <p>Create new post</p>
                    <input type='text' />
            </label>
            <button type="submit">Sumbit</button>
            </form>
        </div>
    );
    
}    
  export default CommentsForm;