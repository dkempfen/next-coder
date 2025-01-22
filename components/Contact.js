import React from 'react';

const Contact = () => {
    return (
        <div className="bg-black p-5 rounded-lg shadow-2xl text-yellow-500 font-sans">
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">Nombre:</label>
                    <input type="text" id="name" name="name" required className="w-full p-2 rounded-md border-none shadow-lg" />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input type="email" id="email" name="email" required className="w-full p-2 rounded-md border-none shadow-lg" />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1">Mensaje:</label>
                    <textarea id="message" name="message" required className="w-full p-2 rounded-md border-none shadow-lg"></textarea>
                </div>
                
                <button type="submit" className="bg-yellow-500 text-black p-2 rounded-md border-none shadow-lg cursor-pointer">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;