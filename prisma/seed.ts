import { Prisma } from "@prisma/client";

import { prisma } from "../common/prisma.config";

const userData: Prisma.UserCreateInput[] = [
    {
        name: "Patrick Thach",
        email: "patrick@geoarts.network"
    },
    {
        name: "Nilu",
        email: "nilu@geoarts.network"
    },
    {
        name: "Mahmoud",
        email: "mahmoud@geoarts.network"
    }
];

async function main() {
    console.log(`Start seeding ...`);
    for (const u of userData) {
        const user = await prisma.user.create({
            data: u
        });
        console.log(`Created user with id: ${user.id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
