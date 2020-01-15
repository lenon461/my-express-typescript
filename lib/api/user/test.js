async function a() {
    try {
        throw Error("a");
    } catch (error) {
        console.error("a" + error);
    }
}

async function b() {
    try {
        await a();
        throw Error("b");
    } catch (error) {
        console.error("b" + error);
    }
}

b();
