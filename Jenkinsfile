pipeline {

  agent any
  
  stages {
    stage("Build"){
      steps{
        withMaven()
        {
       sh '/.mvn -verion'
      }     
         echo "Building application using maven"
    } 
     stage("Test"){
      steps{
        echo "Runing test cases"
      }         
    }
    stage("Deploy"){
      steps{
        echo "Deploying application"
      }         
    }
  }
  
}
