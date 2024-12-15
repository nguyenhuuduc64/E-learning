import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@mui/material';
function Canvas() {
    const canvasRef = useRef(null); // Khởi tạo ref cho canvas
    const [history, setHistory] = useState([]); // Lưu lịch sử các trạng thái của canvas
    useEffect(() => {
        const canvas = canvasRef.current; // Lấy canvas từ ref
        const ctx = canvas.getContext('2d'); // Lấy context 2D
        let drawing = false;

        // Các hàm xử lý sự kiện
        const handleMouseDown = (event) => {
            drawing = true;
            ctx.beginPath();
            ctx.moveTo(getOffsetX(event, canvas), getOffsetY(event, canvas)); // Lấy tọa độ từ helper function
        };

        const handleMouseUp = () => {
            drawing = false;
            ctx.closePath();
        };

        const handleMouseMove = (event) => {
            if (drawing) {
                ctx.lineWidth = 5;
                ctx.lineCap = 'round';
                ctx.strokeStyle = 'black';

                ctx.lineTo(getOffsetX(event, canvas), getOffsetY(event, canvas)); // Lấy tọa độ từ helper function
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(getOffsetX(event, canvas), getOffsetY(event, canvas)); // Lấy tọa độ từ helper function
            }
        };

        // Thêm sự kiện vào canvas
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mousemove', handleMouseMove);

        // Dọn dẹp sự kiện khi component unmount
        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Chạy một lần khi component mount

    // Helper function để lấy tọa độ
    const getOffsetX = (event, canvas) => {
        const rect = canvas.getBoundingClientRect(); // Lấy vị trí của canvas
        return event.clientX - rect.left; // Tính toán offset X
    };

    const getOffsetY = (event, canvas) => {
        const rect = canvas.getBoundingClientRect(); // Lấy vị trí của canvas
        return event.clientY - rect.top; // Tính toán offset Y
    };
    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa toàn bộ nội dung canvas
    };

    const saveCanvasState = () => {
        const canvas = canvasRef.current;
        const dataUrl = canvas.toDataURL(); // Get the canvas image as a data URL
        setHistory((prev) => [...prev, dataUrl]); // Add to history
    };

    const undo = () => {
        if (history.length > 0) {
            const lastState = history[history.length - 1]; // Get the last state
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = lastState; // Set image source to the last state
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear current canvas
                ctx.drawImage(img, 0, 0); // Draw the last state
            };
            setHistory((prev) => prev.slice(0, -1)); // Remove the last state from history
        }
    };
    return (
        <div>
            <canvas
                ref={canvasRef} // Gán ref vào canvas
                width={800} // Đặt chiều rộng thực tế cho canvas
                height={400} // Đặt chiều cao thực tế cho canvas
                style={{
                    width: '50vw', // Đặt chiều rộng hiển thị cho canvas
                    height: 'auto', // Chiều cao tự động dựa trên chiều rộng
                    border: '1px solid black', // Thêm viền cho canvas
                    cursor: 'crosshair', // Thay đổi con trỏ
                    backgroundColor: 'white', // Đặt màu nền cho canvas
                }}
            ></canvas>
            <Button variant="contained" onClick={clearCanvas} style={{ margin: '10px' }}>
                Xóa
            </Button>
            <Button variant="contained" onClick={undo}>
                Hoàn tác
            </Button>
        </div>
    );
}

export default Canvas;
