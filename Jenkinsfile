pipeline {

  agent any

  stages {
	stage('Build') { 
		    steps {
			    withMaven(){
				    sh 'mvn -B -DskipTests clean package' 
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
