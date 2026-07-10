pipeline {

    agent any

    tools {
        nodejs 'Node22'
    }

    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Checking out source code..."
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: '.next/**', fingerprint: true
            }
        }

        stage('Health Check') {
            steps {
                sh 'echo "Application Build Successful"'
            }
        }

    }

    post {

        success {
            echo 'CI Pipeline Completed Successfully'
        }

        failure {
            echo 'CI Pipeline Failed'
        }

        always {
            cleanWs()
        }

    }

}