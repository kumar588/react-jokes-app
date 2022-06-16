pipeline {

  agent any

  stages {
	stage('Build') { 
		    steps {
			    withMaven(maven: 'mvn') {
            sh "mvn clean package"
        }
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
