function MyDecorator() {
    return (_a: any, _b: any, _c: any) => {
        console.log('decorator');
    }
}

class Test {
    @MyDecorator()
    test() {
        console.log('test');
    }
}

export async function bootstrap() {
    const test = new Test()
    test.test()
}

bootstrap();