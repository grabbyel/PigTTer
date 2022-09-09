const EditarPerfilComponent = ({name, updateName, image, updateImage, handleNameChange, handleImageChange, setEdit}) => {
    return(
        <>
            <div>
                <input placeholder="nuevo nombre" value={name} onChange={handleNameChange} />
                <button onClick={updateName}>Editar nombre</button>
            </div>
            <div>
                <input placeholder="pega la url, max 100x100px" value={image} onChange={handleImageChange} />
                <button onClick={updateImage}>Editar foto</button>
            </div>
            <div>
                <button onClick={()=>setEdit(false)}>Cerrar</button>
            </div>
        </>
    )
}

export default EditarPerfilComponent