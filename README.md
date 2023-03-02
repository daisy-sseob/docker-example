
## 실행중인 컨테이너 프로세스 확인하기
<br>

```
$ docker ps
```

## 전체 컨테이너 프로세스 확인하기
<br>

```
$ docker ps -a
```

## 이미지 빌드하기
<br>

- 현재 디렉토리에서 이미지 빌드

```
$ docker build .
```

## 컨테이너 생성&실행
<br>

- --name : 컨테이너의 이름 명시
- -p : publish 한다는 뜻으로 `localport:docker컨테이너노출포트` 어플리케이션에 access하려는 로컬 포트를 지정(출판)하는 겁니다.
- -d : detached(분리) 모드로 컨테이너를 생성합니다. (docker run 으로 컨테이너 생성시 attached 모드가 default 입니다.)
    - detached 모드로 실행하면 back ground에서 실행됩니다. (옵션은 -b)
    - attached 모드로 실행하면 fore ground에서 실행됩니다. (옵션은 -a)

```docker
$ docker run --name node-example -p 3000:3000 -d 91e7af22
```

## 생성된 컨테이너 실행&중지 하기
<br>

- container id로 실행하는 경우 식별 가능한 만큼만 id를 적어주면 실행 가능 !
- -a, -d 옵션을 통해 attached, detached 모드로 실행 가능합니다.

```
$ docker start container_id

$ docker stop container_id

$ docker start container_name

$ docker stop container_name
```
