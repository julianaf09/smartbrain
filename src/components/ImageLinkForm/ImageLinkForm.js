import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className='f3 white'>
				{'This Magic Brain will detect faces in your pictures. Give it a try!'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}></input>
					<button className='w-30 grow f4 link ph3 pv2 dib black bg-green' onClick={onSubmit}>Detect</button>
				</div>
			</div>
    </div>
  );
}

export default ImageLinkForm;