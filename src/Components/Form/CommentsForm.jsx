

 
function CommentsForm() {//add function and ref file name
    const handleSubmit = event => {
        event.preventDefaul ();
        alert('Your comment has been submitted')
    }


     return ( 
        <div className='divMain'>
            <h1>Add New post</h1>
            <form onSubmit={handleSubmit}>
            <label>
                    <p>Name</p>
                    <input name="name" />
            </label>

            <label>
                    <p>Comment</p>
                    <input type='text' />
            </label>
            <button type="submit">Sumbit</button>
            </form>
        </div>
    );
    
}    
  export default CommentsForm;