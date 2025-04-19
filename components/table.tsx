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
	Input,
} from "@heroui/react";
import { useStore } from "@/store/useStore";
import { useState } from "react";

export default function BaseTable() {
	const memes = useStore((s) => s.memes);
	const updateMeme = useStore((s) => s.updateMeme);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [selectedMemeId, setSelectedMemeId] = useState<number | null>(null);
	const [editedTitle, setEditedTitle] = useState<string>("");

	const selectedMeme = memes.find((m) => m.id === selectedMemeId) || null;

	const handleEditClick = (id: number) => {
		setSelectedMemeId(id);
		setEditedTitle(selectedMeme?.title || "");
		onOpen();
	};

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTitle(e.target.value);
	};

	const handleSaveChanges = () => {
		if (selectedMeme && editedTitle !== selectedMeme.title) {
			updateMeme(selectedMeme.id, {
				...selectedMeme,
				title: editedTitle,
			});
		}
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
								<Button
									onClick={() => handleEditClick(meme.id)}
								>
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

										<div>
											<strong>Title:</strong>
											<Input
												isRequired
												minLength={3}
												maxLength={99}
												value={editedTitle}
												onChange={handleTitleChange}
											/>
										</div>
										<p>
											<strong>Likes:</strong>{" "}
											{selectedMeme.likes}
										</p>
										<img
											src={selectedMeme.imageUrl}
											alt={selectedMeme.title}
											className="w-full h-auto rounded-md mt-2 lg:max-h-80 max-h-72"
										/>
									</>
								) : (
									<p>No meme selected.</p>
								)}
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									onPress={() => {
										if (selectedMeme) {
											updateMeme(selectedMeme.id, {
												likes: selectedMeme.likes - 1,
											});
										}
									}}
								>
									Dislike
								</Button>
								<Button
									color="primary"
									onPress={() => {
										if (
											selectedMeme &&
											selectedMeme.likes < 99
										) {
											updateMeme(selectedMeme.id, {
												likes: selectedMeme.likes + 1,
											});
										}
									}}
								>
									Like
								</Button>
								<Button
									color="success"
									className="text-white"
									onPress={() => {
										handleSaveChanges();
										onClose();
									}}
								>
									Save Changes
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
