const SectionTitle = ({
	title,
	paragraph,
	width = "570px",
	center,
	mb = "100px",
}: {
	title: string;
	paragraph: string;
	width?: string;
	center?: boolean;
	mb?: string;
}) => {
	return (
		<>
			<div
				className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
				data-wow-delay=".1s"
				style={{ maxWidth: width, marginBottom: mb }}
			>
				<h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
					{title}
				</h2>
				<p className="text-body-color mb-12 text-lg  font-thin dark:text-white dark:opacity-90">
					{paragraph}
				</p>
			</div>
		</>
	);
};

export default SectionTitle;
