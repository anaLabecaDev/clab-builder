export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <header className='bg-slate-900'>
        <p className='text-slate-50 p-6'>Home</p>
      </header>

      <form className='mx-auto border border-slate-300 rounded-md'>
        <div className='mb-6'>
          <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-900" >Email:</label>
          <input type='email' id='email' name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
        <div className='mb-6'>
          <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-900">Password:</label>
          <input type='password' id='password' name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
        <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>
    </main>
  );
}
