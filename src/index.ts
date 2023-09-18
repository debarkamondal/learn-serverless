import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { genid } from "/opt/nodejs/genid";

module.exports.handler = async (
	event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
	const id = genid();
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: `This is a new id: ${id}`,
				input: event,
			},
			null,
			2
		),
	};
};
