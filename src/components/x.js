<Transition appear show={isopen} as={Fragment} style={{position:'absolute'}} >
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
      <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add A Dependant
                </Dialog.Title>
                
                <div className="mt-2">
                  <p className="text-sm text-gray-500">First Name</p>  
                  
                  <input placeholder='First Name' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}}
                  name='firstName' value={inputs.firstName || ''}  onChange={handleInputChange}/>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Last Name</p>  
                  <input placeholder='Last Name' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}} 
                  type='text' name='lastName' value={inputs.lastName || ''} onChange={handleInputChange} />
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Age</p>  
                  <input placeholder='Age' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}} 
                  type='number' value={inputs.age || ''} name='age' onChange={handleInputChange} />
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Gender</p>  
                  <input placeholder='Gender' className='py-1 rounded w-full bg-slate-200 pl-3' style={{outline:'none'}}
                  type='text' value={inputs.gender || ''} name='gender' onChange={handleInputChange} />
                </div>
                <div className='mt-2'>
                  <button type='submit' onClick={closeModal} className='p-2 bg-green-600 text-slate-400 rounded font-serif' >Submit</button>

                </div>
                

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    