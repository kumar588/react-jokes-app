pipeline {

  agent any

  stages {
	stage('Build') { 
		    steps {
			   
            sh "maven clean package"
       
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
