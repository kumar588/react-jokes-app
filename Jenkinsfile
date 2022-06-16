pipeline {

  agent {
        docker {
            image 'maven:3.8.6-openjdk-8' 
            args '-v /root/.m2:/root/.m2' 
        }
    }

  stages {
	stage('Build') { 
		    steps {
			sh 'mvn -B -DskipTests clean package' 
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
