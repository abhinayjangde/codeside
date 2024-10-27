import prisma from "./index";
async function main() {
    await prisma.user.create({
        data: {
            name: 'Default User',
            email: 'defaultuser@example.com',
            password: 'securepassword', // Ensure this is hashed in a real application
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });