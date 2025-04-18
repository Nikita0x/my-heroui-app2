"use client";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Button,
} from "@heroui/react";

export default function BaseTable() {
	return (
		<Table
			isStriped
			aria-label="Example static collection table"
		>
			<TableHeader>
				<TableColumn>ID</TableColumn>
				<TableColumn>TITLE</TableColumn>
				<TableColumn>IMAGE</TableColumn>
				<TableColumn>LIKES</TableColumn>
				<TableColumn>ACTIONS</TableColumn>
			</TableHeader>
			<TableBody>
				<TableRow key="1">
					<TableCell>Tony Reichert</TableCell>
					<TableCell>CEO</TableCell>
					<TableCell>Active</TableCell>
					<TableCell>Active</TableCell>
					<TableCell>
						<Button title="hello">Edit</Button>
					</TableCell>
				</TableRow>
				<TableRow key="2">
					<TableCell>Zoey Lang</TableCell>
					<TableCell>Technical Lead</TableCell>
					<TableCell>Active</TableCell>
					<TableCell>Active</TableCell>
					<TableCell>
						<Button title="hello">Edit</Button>
					</TableCell>
				</TableRow>
				<TableRow key="3">
					<TableCell>Jane Fisher</TableCell>
					<TableCell>Senior Developer</TableCell>
					<TableCell>Active</TableCell>
					<TableCell>Active</TableCell>
					<TableCell>
						<Button title="hello">Edit</Button>
					</TableCell>
				</TableRow>
				<TableRow key="4">
					<TableCell>William Howard</TableCell>
					<TableCell>Community Manager</TableCell>
					<TableCell>Active</TableCell>
					<TableCell>Active</TableCell>
					<TableCell>
						<Button title="hello">Edit</Button>
					</TableCell>
				</TableRow>
				<TableRow key="5">
					<TableCell>William Howard</TableCell>
					<TableCell>Community Manager</TableCell>
					<TableCell>Active</TableCell>
					<TableCell>Active</TableCell>
					<TableCell>
						<Button title="hello">Edit</Button>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
