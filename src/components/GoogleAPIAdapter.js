class GoogleAPIAdapter {

  doSomething(){ //instance

  }

  static doSomething(){ //class

  }

}

export default GoogleAPIAdapter


const inst = new GoogleAPIAdapter() //instance
inst.doSomething()

GoogleAPIAdapter.doSomething() //class
