import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import BaseTable from "@/components/table";
import Modal from "@/components/modal";

export default function Home() {
	return (
		<>
			<BaseTable />
			<Modal />
		</>
	);
}
