module.exports = {
	definitions: {
		tree: {
			oneOf: [
				// files
				{
					type: 'object',
					required: ['name', 'file'],
					additionalProperties: false,
					properties: {
						name: {
							type: 'string',
							minLength: 1
						},
						file: {
							type: 'string',
							minLength: 1,
							not: {
								const: 'index'
							}
						}
					}
				},
				// directories
				{
					type: 'object',
					required: ['name', 'dir', 'list'],
					additionalProperties: false,
					properties: {
						name: {
							type: 'string',
							minLength: 1
						},
						dir: {
							type: 'string',
							minLength: 1,
							not: {
								const: 'index'
							}
						},
						list: {
							type: 'array',
							minItems: 1,
							items: {
								'$ref': '#/definitions/tree'
							}
						}
					}
				}
			]
		}
	},

	type: 'object',
	required: ['name', 'src', 'dst', 'list', 'render'],
	additionalProperties: false,
	properties: {
		name: {
			type: 'string',
			minLength: 1
		},
		src: {
			type: 'string',
			minLength: 1
		},
		dst: {
			type: 'string',
			minLength: 1
		},
		template: {
			type: 'string',
			minLength: 1
			/* default: <__dirname>/templates/default.ejs */
		},
		render: { /* function */ },
		list: {
			type: 'array',
			minItems: 1,
			items: {
				'$ref': '#/definitions/tree'
			}
		}
	}
};