# **TodoApp** (Eng)

A simple and efficient note-taking application built with React Native and Expo. This project allows users to create, view, and manage their notes.

**Features**

* Create Notes: Users can create notes with a title and content.
* View Notes: Easily view the list of all notes.
* Manage Notes: Edit or delete notes as needed.
* Local Storage: Notes are stored locally in a JSON file, simulating a backend.

**Technologies Used**

* React Native: A popular framework for building mobile applications using React.
* Expo: A framework and a platform for universal React applications.
* JSON Server: Used to create a simple local backend for storing notes.
* ngrok: Allows exposing the local server to the internet for testing purposes.
* React Navigation: Used for managing the navigation within the app.
* Axios: A promise-based HTTP client for making requests to the local JSON server.

**Getting Started**
* Prerequisites
* Node.js and npm installed.
* Expo CLI installed globally via 'npm install -g expo-cli'.
  
**Installation**
1. Clone the repository:
```bash
git clone https://github.com/yourusername/todoapp.git
cd todoapp
```
2. Install dependencies:
```bash
npm install
```
3. Start the Expo server:
```bash
npm start
```
4. Start the JSON Server:
```bash
npm run db
```
5. Optionally, use ngrok to expose the local server:
```bash
npm run tunnel
```

**Usage**
* Run the application on your preferred platform (Android, iOS, or Web):
```bash
npm run android   # for Android
npm run ios       # for iOS
npm run web       # for Web
```
* The application will launch and you can start creating and managing notes.

**Project Structure**
* /db.json: Contains the notes data in JSON format.
* /src: Contains the main source code for the application.
* /screens: Contains the different screens (e.g., HomeScreen).
* /components: Reusable components across the application.
* package.json: Project metadata and dependencies.

**Contributing**

Contributions are welcome! Please open an issue or submit a pull request for any bugs, features, or improvements.

**License**

This project is licensed under the ISC License.


# **TodoApp** (Tr)

React Native ve Expo ile geliştirilmiş basit ve verimli bir not alma uygulaması. Bu proje, kullanıcıların not oluşturmasına, görüntülemesine ve yönetmesine olanak tanır.

**Özellikler**
* Not Oluşturma: Kullanıcılar başlık ve içerik ile notlar oluşturabilir.
* Notları Görüntüleme: Tüm notların listesini kolayca görüntüleyin.
* Notları Yönetme: Notları düzenleyin veya silin.
* Yerel Depolama: Notlar, bir backend simülasyonu olarak yerel bir JSON dosyasında saklanır.

**Kullanılan Teknolojiler**

* React Native: React kullanarak mobil uygulamalar geliştirmek için popüler bir framework.
* Expo: Evrensel React uygulamaları için bir framework ve platform.
* JSON Server: Notları saklamak için basit bir yerel backend oluşturmak amacıyla kullanılır.
* ngrok: Test amaçlı olarak yerel sunucuyu internete açmayı sağlar.
* React Navigation: Uygulama içindeki gezinmeyi yönetmek için kullanılır.
* Axios: Yerel JSON sunucusuna istek yapmak için kullanılan bir promise tabanlı HTTP istemcisi.
* 
**Başlarken**
  
*Gereksinimler*

* Node.js ve npm yüklü olmalı.
* Expo CLI, npm install -g expo-cli komutu ile global olarak kurulmuş olmalı.

**Kurulum**
1. Depoyu klonlayın:
```bash
git clone https://github.com/yourusername/todoapp.git
cd todoapp
```
2. Bağımlılıkları yükleyin:
```bash
npm install
```
3. Expo sunucusunu başlatın:
```bash
npm start
```
4. JSON Server'ı başlatın:
```bash
npm run db
```
5. İsteğe bağlı olarak, yerel sunucuyu internete açmak için ngrok'u kullanın:
```bash
npm run tunnel
```

**Kullanım**

* Uygulamayı tercih ettiğiniz platformda (Android, iOS veya Web) çalıştırın:

```bash
npm run android   # for Android
npm run ios       # for iOS
npm run web       # for Web
```
* Uygulama başlatılacak ve notlar oluşturmaya ve yönetmeye başlayabilirsiniz.

**Proje Yapısı**

* /db.json: Not verilerini JSON formatında içerir.
* /src: Uygulamanın ana kaynak kodlarını içerir.
* /screens: Farklı ekranları içerir (örneğin, HomeScreen).
* /components: Uygulama genelinde yeniden kullanılabilir bileşenler.
* package.json: Proje meta verileri ve bağımlılıkları.

**Katkıda Bulunma**
* Katkılar memnuniyetle karşılanır! Herhangi bir hata, özellik veya iyileştirme için lütfen bir issue açın veya bir pull request gönderin.

**Lisans**

Bu proje, ISC Lisansı ile lisanslanmıştır.
