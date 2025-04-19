"use client";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@heroui/react";
import { useStore, Meme } from "@/store/useStore";
import { useState } from "react";

export default function BaseTable() {
	const { memes, updateMeme } = useStore();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

	const handleEditClick = (meme: Meme) => {
		setSelectedMeme(meme);
		onOpen(); // open the modal
	};

	return (
		<>
			<Table
				isStriped
				aria-label="Example meme table"
			>
				<TableHeader>
					<TableColumn>ID</TableColumn>
					<TableColumn>TITLE</TableColumn>
					<TableColumn>LIKES</TableColumn>
					<TableColumn>ACTIONS</TableColumn>
				</TableHeader>
				<TableBody>
					{memes.map((meme) => (
						<TableRow key={meme.id}>
							<TableCell>{meme.id}</TableCell>
							<TableCell>{meme.title}</TableCell>
							<TableCell>{meme.likes}</TableCell>
							<TableCell>
								<Button onClick={() => handleEditClick(meme)}>
									Edit
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader>Edit Meme</ModalHeader>
							<ModalBody>
								{selectedMeme ? (
									<>
										<p>
											<strong>ID:</strong>{" "}
											{selectedMeme.id}
										</p>
										<p>
											<strong>Title:</strong>{" "}
											{selectedMeme.title}
										</p>
										<p>
											<strong>Likes:</strong>{" "}
											{selectedMeme.likes}
										</p>
										<img
											src={selectedMeme.imageUrl}
											alt={selectedMeme.title}
											className="w-full h-auto rounded-md mt-2"
										/>
									</>
								) : (
									<p>No meme selected.</p>
								)}
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="light"
									onPress={onClose}
								>
									Close
								</Button>
								<Button
									color="primary"
									onPress={() => {
										if (selectedMeme) {
											updateMeme(selectedMeme.id, {
												likes: selectedMeme.likes + 1,
											});
										}
										onClose();
									}}
								>
									+1 Like
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
