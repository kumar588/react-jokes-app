pipeline {

  agent any
tools { 
        maven 'maven' 
        jdk 'jdk8' 
    }
  stages {
	stage('Build') { 
		    steps {
			   
            sh "mvn --version"
       
		    }
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
