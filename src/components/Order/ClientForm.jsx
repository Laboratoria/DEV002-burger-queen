import React from 'react';

const ClientForm = ({ client, handleChangeClient, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Cliente:
				<input type='text' value={client} onChange={handleChangeClient} />
			</label>
			<button type='submit'> Hacer pedido</button>
		</form>
	);
};

export { ClientForm };
