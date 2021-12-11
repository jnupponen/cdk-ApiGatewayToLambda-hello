import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { ApiGatewayToLambda, ApiGatewayToLambdaProps } from '@aws-solutions-constructs/aws-apigateway-lambda'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigw from 'aws-cdk-lib/aws-apigateway'

export class CdkApiGatewayToLambdaHelloStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        const api_lambda_props: ApiGatewayToLambdaProps = {
            lambdaFunctionProps: {
                code: lambda.Code.fromAsset('lambda'),
                runtime: lambda.Runtime.NODEJS_14_X,
                handler: 'hello.handler'
            },
            apiGatewayProps: {
                defaultMethodOptions: {
                    authorizationType: apigw.AuthorizationType.NONE
                }
            }
        }

        new ApiGatewayToLambda(this, 'ApiGatewayToLambda', api_lambda_props)
    }
}
