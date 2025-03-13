export default function Header() {
    return (
        <header>
            <h1>Кулинарная книга</h1>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand active" href="#">Главная</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Обо мне</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Категория
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">первые блюда</a></li>
                                    <li><a class="dropdown-item" href="#">вторые блюда</a></li>
                                    <li><a class="dropdown-item" href="#">закуски</a></li>
                                    <li><a class="dropdown-item" href="#">десерты</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
        </header>
    );
}