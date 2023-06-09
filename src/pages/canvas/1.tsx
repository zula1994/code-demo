
import { useLayoutEffect, useRef } from 'react'

function App() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useLayoutEffect(() => {
        setTimeout(draw, 200)
    }, [])
    const draw = () => {
        if (!canvasRef.current) return
        const canvas: HTMLCanvasElement = canvasRef.current
        const ctx = canvas.getContext('2d')

        canvas.style.width = '200px'
        canvas.style.height = '200px'

        canvas.width = 1024
        canvas.height = 1024
        const p = new Path2D(
            'M682.346667 128.789333a10.666667 10.666667 0 0 0-7.253334 0.362667L115.797333 364.330667c-4.416 1.856-5.098667 4.906667-5.098666 10.752V787.2a10.666667 10.666667 0 0 0 9.344 10.581333l781.76 97.834667a10.666667 10.666667 0 0 0 11.989333-10.581333V495.317333a10.666667 10.666667 0 0 0 0.938667-4.394666c0-174.144-87.018667-317.589333-232.384-362.154667z m210.112 371.2v145.728L132.032 533.397333V386.773333l760.426667 113.216zM132.032 590.826667v-35.882667l760.426667 112.32v35.882667L132.032 590.848z m0 21.546666l760.426667 112.341334v148.202666l-760.426667-95.146666v-165.376z m27.157333-243.178666l520.576-218.88c128.597333 41.301333 209.493333 168.064 213.482667 328.192L159.189333 369.216z m302.144-67.904l-38.869333 41.813333-15.616-14.549333 38.869333-41.792 15.616 14.528z m166.186667-28.117334l38.869333-41.792-15.616-14.506666-38.890666 41.770666 15.637333 14.528z m-4.181333 65.984l-38.869334 41.813334-15.616-14.549334 38.869334-41.792 15.616 14.528z m129.813333 46.656l38.869333-41.813333-15.616-14.506667-38.890666 41.792 15.637333 14.506667z'
        )
        // ctx?.fill(p)

        ctx.strokeStyle = '#0000ff'

        ctx?.stroke(p)
    }

    return (
        <div className="relative overflow-hidden bg-white">
            <canvas ref={canvasRef} />

            <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
            >
                <path
                    d="M682.346667 128.789333a10.666667 10.666667 0 0 0-7.253334 0.362667L115.797333 364.330667c-4.416 1.856-5.098667 4.906667-5.098666 10.752V787.2a10.666667 10.666667 0 0 0 9.344 10.581333l781.76 97.834667a10.666667 10.666667 0 0 0 11.989333-10.581333V495.317333a10.666667 10.666667 0 0 0 0.938667-4.394666c0-174.144-87.018667-317.589333-232.384-362.154667z m210.112 371.2v145.728L132.032 533.397333V386.773333l760.426667 113.216zM132.032 590.826667v-35.882667l760.426667 112.32v35.882667L132.032 590.848z m0 21.546666l760.426667 112.341334v148.202666l-760.426667-95.146666v-165.376z m27.157333-243.178666l520.576-218.88c128.597333 41.301333 209.493333 168.064 213.482667 328.192L159.189333 369.216z m302.144-67.904l-38.869333 41.813333-15.616-14.549333 38.869333-41.792 15.616 14.528z m166.186667-28.117334l38.869333-41.792-15.616-14.506666-38.890666 41.770666 15.637333 14.528z m-4.181333 65.984l-38.869334 41.813334-15.616-14.549334 38.869334-41.792 15.616 14.528z m129.813333 46.656l38.869333-41.813333-15.616-14.506667-38.890666 41.792 15.637333 14.506667z"
                ></path>
            </svg>
        </div>
    )
}

export default App